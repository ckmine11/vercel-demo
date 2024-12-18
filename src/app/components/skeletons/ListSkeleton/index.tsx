import { type ReactElement } from 'react'

export function ListSkeleton(): ReactElement {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700" />
    </div>
  )
}
