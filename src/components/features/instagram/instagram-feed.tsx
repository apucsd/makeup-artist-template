import React from "react";
import { instagramFeedData } from "@/data/instagram";
import { siteConfig } from "@/config/site";

export function InstagramFeed() {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">
            Live Feed & Behind The Scenes
          </span>
          <h3 className="font-serif text-2xl font-semibold text-neutral-900 mt-1">
            Follow Us On Instagram
          </h3>
          <p className="text-sm text-neutral-600 mt-0.5">
            Daily beauty inspiration, bridal previews, and behind-the-chair tutorials.
          </p>
        </div>
        <a
          href={siteConfig.contact.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-5 py-2.5 rounded-full text-sm transition-all self-start sm:self-auto shadow-sm"
        >
          <span>📷 {siteConfig.contact.instagram}</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {instagramFeedData.map((post) => (
          <a
            key={post.id}
            href={post.postUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative h-60 overflow-hidden rounded-2xl bg-neutral-900 shadow-sm block"
          >
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            {/* Dark Hover Overlay with Metrics */}
            <div className="absolute inset-0 bg-neutral-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-md self-start border border-amber-800/40">
                {post.tag}
              </span>
              <div className="space-y-2">
                <p className="text-xs line-clamp-2 leading-tight text-neutral-200">
                  {post.caption}
                </p>
                <div className="flex items-center gap-3 text-xs font-mono text-amber-200 pt-1 border-t border-neutral-800">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
