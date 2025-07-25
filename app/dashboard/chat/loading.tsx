import { Skeleton } from "@/components/ui/skeleton"

export default function ChatLoading() {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </div>

      {/* Chat Messages Skeleton */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Date separator */}
        <div className="flex justify-center mb-4">
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>

        {/* Bot message skeleton */}
        <div className="flex gap-3 justify-start">
          <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
          <div className="max-w-2xl">
            <div className="bg-green-50 border border-green-200 rounded-2xl px-4 py-3">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />

              {/* FAQ buttons skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-48 mb-3" />
                <div className="grid gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full rounded-md" />
                  ))}
                  <Skeleton className="h-10 w-full rounded-md mt-3" />
                </div>
              </div>
            </div>
            <Skeleton className="h-3 w-16 mt-1" />
          </div>
        </div>

        {/* User message skeleton */}
        <div className="flex gap-3 justify-end">
          <div className="max-w-md order-2">
            <div className="bg-blue-600 rounded-2xl px-4 py-3">
              <Skeleton className="h-4 w-full bg-blue-500" />
            </div>
            <div className="flex justify-end mt-1">
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
          <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
        </div>

        {/* Support message skeleton */}
        <div className="flex gap-3 justify-start">
          <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
          <div className="max-w-md">
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <Skeleton className="h-3 w-16 mt-1" />
          </div>
        </div>
      </div>

      {/* Message Input Skeleton */}
      <div className="bg-white border-t border-gray-200 p-4 flex-shrink-0">
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <div className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 flex items-center gap-2">
              <Skeleton className="h-5 flex-1" />
              <Skeleton className="h-8 w-8 rounded" />
            </div>
          </div>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </div>
  )
}
