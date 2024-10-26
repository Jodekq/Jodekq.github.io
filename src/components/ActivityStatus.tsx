// src/components/ActivityStatus.tsx
import React, { useEffect, useState } from 'react';

interface Activity {
   id: string;
   name: string;
   type: number;
   state?: string;
   details?: string;
}

interface DiscordUser {
   id: string;
   username: string;
   avatar: string;
}

interface Resp {
   discord_status: 'online' | 'dnd' | 'idle';
   discord_user: DiscordUser;
   activities: Activity[];
   active_on_discord_web: boolean;
   active_on_discord_desktop: boolean;
   active_on_discord_mobile: boolean;
   listening_to_spotify: boolean;
   spotify?: {
       timestamps: {
           start: number;
           end: number;
       };
       album: string;
       album_art_url: string;
       artist: string;
       song: string;
       track_id: string;
   };
}

const ActivityStatus: React.FC = () => {
   const [data, setData] = useState<Resp | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const ID = '485815291406843904';
      fetch(`https://api.lanyard.rest/v1/users/${ID}`)
         .then((res) => res.json())
         .then((res) => {
            setData(res.data);
            setLoading(false);
         });
   }, []);

   if (loading || !data) return (
      <div className="flex flex-row items-center text-emerald-50 gap-5">
         <a href="https://discord.com/users/Jodek" target="_blank" className="flex flex-row items-center border border-emerald-200 rounded-lg justify-between px-5 pb-1 h-20 font-sans text-xl text-emerald-50 gap-3">
            <i className="bx bxl-discord-alt text-2xl"></i>
            <div>
               <p className="text-lg font-semibold">
                  @jodek
               </p>
               <div className="flex items-center text-sm">
                   <div
                       className={`w-2.5 h-2.5 rounded-full mr-2 bg-green-500 animate-pulse`}
                   ></div>
                   Online
               </div>
            </div>
            <i className="bx bx-link-external cursor-pointer p-3 text-gray-400"></i>
         </a>
         <div className="px-5 pb-1 border border-emerald-200 rounded-lg font-sans h-20 items-center flex flex-row gap-3">
            <i className="bx bxl-spotify text-2xl"></i>
            <div className="flex-1">
               <p className="text-lg font-semibold">Listening to:</p>
               <p className="text-sm">
                  Not currently playing anything
               </p>
            </div>
         </div>
      </div>
   );

   return (
      <div className="flex flex-row flex-wrap items-center text-emerald-50 gap-5">
         <a href="https://discord.com/users/Jodek" target="_blank" className="flex flex-row items-center border border-emerald-200 rounded-lg justify-between px-5 pb-1 h-20 font-sans text-xl text-emerald-50 gap-3">
            <i className="bx bxl-discord-alt text-4xl"></i>
            <div>
               <p className="text-lg font-semibold">
                  @{data.discord_user.username}
               </p>
               <p className="flex items-center text-sm">
                   <div
                       className={`w-2.5 h-2.5 rounded-full mr-2 ${
                           data.discord_status === 'online' ? 'bg-green-500 animate-pulse' :
                           data.discord_status === 'dnd' ? 'bg-red-500' :
                           data.discord_status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'
                       }`}
                   ></div>
                   {data.activities && data.activities.length > 0 ? (
                       `${data.activities[0].name}`
                   ) : (
                       data.discord_status === 'online' ? 'Online' :
                       data.discord_status === 'dnd' ? 'Do Not Disturb' :
                       data.discord_status === 'idle' ? 'Idle' : 'Offline'
                   )}
               </p>
            </div>
            <i className="bx bx-link-external cursor-pointer p-3 text-gray-400"></i>
         </a>
         <div className="px-5 pb-1 border border-emerald-200 rounded-lg font-sans h-20 items-center flex flex-row gap-3">
            <i className="bx bxl-spotify text-4xl"></i>
            <div className="flex-1">
               <p className="text-lg font-semibold">Listening to:</p>
               <p className="text-sm">
                  {data.spotify
                     ? `${data.spotify.song} by ${data.spotify.artist}`
                     : 'Not currently playing anything'}
               </p>
            </div>
         </div>
      </div>
   );
};

export default ActivityStatus;
