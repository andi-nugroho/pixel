import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Font constants                                                      */
/* ------------------------------------------------------------------ */

type PlainFont = "sans" | "mono"
type PixelFont = "square" | "grid" | "circle" | "triangle" | "line"

const PLAIN_FONT_MAP: Record<PlainFont, string> = {
  sans: "font-sans",
  mono: "font-mono",
}

const PIXEL_FONT_MAP: Record<PixelFont, string> = {
  square: "font-pixel-square",
  grid: "font-pixel-grid",
  circle: "font-pixel-circle",
  triangle: "font-pixel-triangle",
  line: "font-pixel-line",
}

/* ------------------------------------------------------------------ */
/* Text-splitting helper                                               */
/* ------------------------------------------------------------------ */

type Segment = { type: "pixel"; text: string } | { type: "plain"; text: string }

/**
 * Splits `text` into alternating pixel / plain segments based on the
 * provided `plainWords`.  Longer phrases are matched first so that
 * "shadcn/ui" wins over a hypothetical "ui" match.
 */
function splitTextByPlainWords(text: string, plainWords: string[]): Segment[] {
  if (plainWords.length === 0) return [{ type: "pixel", text }]

  // Sort by length descending so longer matches take priority
  const sorted = [...plainWords].sort((a, b) => b.length - a.length)

  // Escape regex-special characters in each word
  const escaped = sorted.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))

  const pattern = new RegExp(`(${escaped.join("|")})`, "g")

  const segments: Segment[] = []
  let lastIndex = 0

  for (const match of text.matchAll(pattern)) {
    const matchStart = match.index ?? 0
    if (matchStart > lastIndex) {
      segments.push({ type: "pixel", text: text.slice(lastIndex, matchStart) })
    }
    segments.push({ type: "plain", text: match[0] })
    lastIndex = matchStart + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ type: "pixel", text: text.slice(lastIndex) })
  }

  return segments
}

/* ------------------------------------------------------------------ */
/* PixelParagraphInverse                                               */
/* ------------------------------------------------------------------ */

export interface PixelParagraphInverseProps extends React.ComponentProps<"p"> {
  /** The paragraph text to render. */
  text: string
  /**
   * Words or phrases within `text` to render in a plain (sans/mono) font.
   * Everything else renders in the pixel font.
   * Matching is case-sensitive and longest-match-first.
   */
  plainWords?: string[]
  /** The wrapper element to render. @default "p" */
  as?: "p" | "span" | "div"
  /** The pixel font used for the base text. @default "square" */
  pixelFont?: PixelFont
  /** The plain font for highlighted words. @default "sans" */
  plainFont?: PlainFont
  /** Extra className applied to each plain-word span. */
  plainWordClassName?: string
}

/**
 * Paragraph where the base text is in a pixel font and specific words
 * or phrases escape into a sans or mono font.
 *
 * @example
 * <PixelParagraphInverse
 *   text="54+ animated components and effects. Free, open source, and built to drop into any shadcn/ui project."
 *   plainWords={["animated", "shadcn/ui"]}
 *   plainFont="sans"
 *   pixelFont="square"
 *   className="text-lg text-muted-foreground"
 * />
 */
export function PixelParagraphInverse({
  text,
  plainWords = [],
  as: Tag = "p",
  className,
  pixelFont = "square",
  plainFont = "sans",
  plainWordClassName,
  ...props
}: PixelParagraphInverseProps) {
  const segments = splitTextByPlainWords(text, plainWords)
  const pixelFontClass = PIXEL_FONT_MAP[pixelFont]
  const plainFontClass = PLAIN_FONT_MAP[plainFont]

  return (
    <Tag
      data-slot="pixel-paragraph-inverse"
      className={cn(pixelFontClass, className)}
      {...props}
    >
      {segments.map((segment, index) => {
        const key = `${segment.type}-${segment.text}-${index}`
        return segment.type === "plain" ? (
          <span
            key={key}
            data-slot="plain-word"
            className={cn(plainFontClass, plainWordClassName)}
          >
            {segment.text}
          </span>
        ) : (
          <span key={key}>{segment.text}</span>
        )
      })}
    </Tag>
  )
}
