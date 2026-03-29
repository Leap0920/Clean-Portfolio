'use client';

import { ContentAreaProps } from '@/types/components';

export function ContentArea({ section, content }: ContentAreaProps) {
  return (
    <main 
      className="flex-1 p-12 overflow-y-auto bg-white"
      role="main"
      aria-label={`${section} content`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
            {content.title}
          </h1>
          {content.metadata && (
            <div className="flex items-center gap-4 text-sm text-gray-600">
              {content.metadata.lastUpdated && (
                <span>
                  Last updated: {content.metadata.lastUpdated.toLocaleDateString()}
                </span>
              )}
              {content.metadata.tags && content.metadata.tags.length > 0 && (
                <div className="flex gap-2">
                  {content.metadata.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {content.content}
        </div>
      </div>
    </main>
  );
}