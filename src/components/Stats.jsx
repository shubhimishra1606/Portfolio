import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VscSourceControl } from 'react-icons/vsc';
import { SiLeetcode, SiGithub, SiCplusplus, SiReact, SiNodedotjs } from 'react-icons/si';

const CodingStats = () => {
  const [githubStats, setGithubStats] = useState(null);
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const githubUser = import.meta.env.VITE_GITHUB_USERNAME;
  const leetcodeUser = import.meta.env.VITE_LEETCODE_USERNAME;

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [resGH, resLCProfile, resLCSolved] = await Promise.all([
          fetch(`https://api.github.com/users/${githubUser}`),
          fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUser}`),
          fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUser}/solved`)
        ]);

        const ghData = await resGH.json();
        const lcProfile = await resLCProfile.json();
        const lcSolved = await resLCSolved.json();

        if (ghData) {
          setGithubStats({
            repos: ghData.public_repos,
            followers: ghData.followers,
            following: ghData.following,
            name: ghData.name
          });
        }

        if (lcProfile && lcSolved) {
          setLeetcodeStats({
            ranking: lcProfile.ranking || "N/A",
            totalSolved: lcSolved.solvedProblem || 0,
            easySolved: lcSolved.easySolved || 0,
            mediumSolved: lcSolved.mediumSolved || 0,
            hardSolved: lcSolved.hardSolved || 0,
          });
        }
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  return (
    <section id="stats" className="py-24 bg-[#0c1016]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-cyan-400 font-mono text-2xl mr-2">03.</span> Statistics
          </h2>
          <div className="h-px bg-gray-700 w-full ml-4 md:w-64"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: CUSTOM GITHUB STATS */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <SiGithub className="text-white text-3xl" />
              <h2 className="text-3xl font-bold text-white">GitHub <span className="text-cyan-400">Insights</span></h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#112240]/30 border border-white/5 rounded-3xl p-6 flex flex-col items-center">
                <span className="text-gray-400 text-xs uppercase tracking-widest mb-1">Repositories</span>
                <span className="text-3xl font-bold text-white">{githubStats?.repos || 0}</span>
              </div>
              {/* <div className="bg-[#112240]/30 border border-white/5 rounded-3xl p-6 flex flex-col items-center">
                <span className="text-gray-400 text-xs uppercase tracking-widest mb-1">Followers</span>
                <span className="text-3xl font-bold text-white">{githubStats?.contributions || 0}</span>
              </div> */}
            </div>

            <div className="bg-linear-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-4xl p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-white font-black text-2xl mb-1">Contributor</h3>
                <p className="text-cyan-400 font-bold uppercase tracking-tighter">Hacktoberfest 2025</p>
                <div className="mt-4 flex gap-2">
                   <span className="bg-white/10 text-[10px] px-2 py-1 rounded text-white">4+ PRs</span>
                   <span className="bg-white/10 text-[10px] px-2 py-1 rounded text-white">October 2025</span>
                </div>
              </div>
              <VscSourceControl className="absolute -right-4 -bottom-4 text-white/5 text-9xl group-hover:rotate-12 transition-transform" />
            </div>
          </motion.div>

          {/* RIGHT SIDE: LEETCODE STATS */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <SiLeetcode className="text-white text-3xl" />
              <h2 className="text-3xl font-bold text-white">LeetCode <span className="text-cyan-400">Solved</span></h2>
            </div>
            
            {loading ? (
              <div className="h-64 flex items-center justify-center text-cyan-400 font-mono">Syncing...</div>
            ) : (
              <div className="space-y-4">
                <div className="bg-[#112240]/30 border border-cyan-500/20 rounded-4xl p-8 flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Total Solved</span>
                  <span className="text-5xl font-black text-cyan-400">{leetcodeStats?.totalSolved}</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {['Easy', 'Medium', 'Hard'].map((label, i) => (
                    <div key={i} className="bg-[#112240]/30 border border-white/5 rounded-2xl p-6 flex flex-col items-center">
                      <span className="text-[10px] font-bold text-gray-500 uppercase mb-2">{label}</span>
                      <span className="text-2xl font-bold text-white">
                        {i === 0 ? leetcodeStats?.easySolved : i === 1 ? leetcodeStats?.mediumSolved : leetcodeStats?.hardSolved}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#112240]/30 border border-white/5 rounded-4xl p-8 flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Global Ranking</span>
                  <span className="text-2xl font-bold text-white tracking-tight">
                    #{leetcodeStats?.ranking?.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CodingStats;