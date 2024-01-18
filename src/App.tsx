function CardSkeleton() {
  return <div className="flex flex-col animate-pulse">
    <div className="bg-slate-200 rounded w-48 h-32"/>
    <div className="flex flex-row my-2 gap-2 items-center">
      <div className="w-10 h-10 rounded-full bg-slate-200"/>
      <div className="flex flex-col gap-1">
        <div className="w-20 h-3 rounded-sm bg-slate-200"/>
        <div className="w-32 h-2 rounded-sm bg-slate-200"/>
      </div>
    </div>
  </div>;
}

function App() {
  return <div className="max-w-lg m-auto my-10 flex gap-4 justify-center">
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
  </div>
}

export default App
