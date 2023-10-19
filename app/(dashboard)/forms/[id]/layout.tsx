function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-grow w-full mx-auto">{children}</div>
  );
}

export default layout;
