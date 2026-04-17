import type { ShaderPropConfig } from "@/lib/shaders-config";

interface PropsTableProps {
  props: ShaderPropConfig[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-border bg-muted/30">
          <tr>
            <th className="whitespace-nowrap px-4 py-3 font-semibold">Prop</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold">Type</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold">
              Default
            </th>
            <th className="px-4 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="px-4 py-3">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-1 text-xs text-destructive">*</span>
                )}
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-xs text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-xs text-muted-foreground">
                  {prop.default}
                </code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
