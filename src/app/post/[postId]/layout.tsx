export default async function PostPageLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4 rounded p-4 max-w-[800px] mx-auto">
      {children}
    </div>
  );
}
