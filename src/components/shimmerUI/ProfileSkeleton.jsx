import React from 'react'

export const ProfileSkeleton = () => {
  return (
    <div className="max-w-12xl mx-auto p-4 sm:p-6 flex flex-col gap-8 bg-slate-50 dark:bg-slate-900 min-h-screen animate-pulse">
      
      {/* Header Skeleton */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col gap-2">
        <div className="h-7 w-48 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
        <div className="h-4 w-72 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
      </div>

      {/* Personal Info Section Skeleton */}
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <div className="h-6 w-44 bg-slate-200 dark:bg-slate-700 rounded-md mb-2"></div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="w-full sm:w-1/4 h-5 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
          <div className="w-full sm:w-3/4 h-10 bg-slate-100 dark:bg-slate-900 rounded-lg"></div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="w-full sm:w-1/4 h-5 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
          <div className="w-full sm:w-3/4 h-10 bg-slate-100 dark:bg-slate-900 rounded-lg"></div>
        </div>

        <div className="flex justify-end mt-2">
          <div className="h-10 w-28 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
        </div>
      </section>

      {/* Avatar Section Skeleton */}
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-md mb-2"></div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0"></div>
          <div className="flex flex-col gap-3 w-full">
            <div className="h-5 w-36 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
            <div className="h-10 w-full bg-slate-100 dark:bg-slate-900 rounded-lg"></div>
            <div className="flex justify-end mt-2">
              <div className="h-10 w-32 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image Section Skeleton */}
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <div className="h-6 w-28 bg-slate-200 dark:bg-slate-700 rounded-md mb-2"></div>
        <div className="w-full h-32 bg-slate-100 dark:bg-slate-900 rounded-lg"></div>
        <div className="flex flex-col gap-3">
          <div className="h-5 w-40 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
          <div className="h-10 w-full bg-slate-100 dark:bg-slate-900 rounded-lg"></div>
          <div className="flex justify-end mt-2">
            <div className="h-10 w-32 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
          </div>
        </div>
      </section>

    </div>
  )
}