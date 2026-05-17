'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Star, GitFork } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/Leap0920/repos?sort=updated&per_page=6')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6">
      {/* Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-slate-700"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <GithubIcon size={20} />
            Contributions
          </h3>
          <a
            href="https://github.com/Leap0920"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1"
          >
            @Leap0920
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Uses our API proxy to recolor the SVG for dark theme */}
        <div className="overflow-hidden rounded-lg bg-slate-700/50 p-3">
          <img
            src="/api/github/contributions"
            alt="Carlo Baclao's GitHub Contributions"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="flex items-center justify-end gap-1 mt-3 text-[10px] text-slate-500">
          <span>Less</span>
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#334155]" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#0e4429]" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#006d32]" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#26a641]" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#39d353]" />
          <span>More</span>
        </div>
      </motion.div>

      {/* Repositories Grid */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Recent Repositories</h3>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 h-32 animate-pulse">
                <div className="h-5 bg-slate-700 rounded w-1/2 mb-3"></div>
                <div className="h-4 bg-slate-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-900/20 text-red-400 p-4 rounded-lg text-sm">
            Failed to load repositories. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-sm group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-blue-400 group-hover:underline flex items-center gap-1.5 truncate">
                    <FolderGit2 size={14} />
                    <span className="truncate">{repo.name}</span>
                  </h4>
                </div>
                <p className="text-xs text-slate-400 mb-4 flex-1 line-clamp-2">
                  {repo.description || 'No description provided.'}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-auto">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      {repo.language}
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks_count}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
