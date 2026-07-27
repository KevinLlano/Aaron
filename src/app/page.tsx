'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, Users, Heart, Calendar, Twitch, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { streamerInfo, socialLinks, streamSchedule } from '@/lib/data';
import { formatViewCount } from '@/lib/utils';
import ContactForm from '@/components/ContactForm';
import { LiveClocks } from '@/components/live-clocks';

export default function Home() {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // Simulate live status check
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    
    const checkLiveStatus = () => {
      // This would be replaced with actual Twitch API call
      setIsLive(Math.random() > 0.5);
      setViewerCount(Math.floor(Math.random() * 10) + 10);
    };
    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 30000);
    return () => clearInterval(interval);
  }, [hasMounted]);

  const parentDomain = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  const twitchParents = typeof window !== 'undefined' 
    ? [window.location.hostname, 'localhost', 'maddwrath.vercel.app'].filter(Boolean).join('&parent=')
    : 'localhost&parent=maddwrath.vercel.app';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={streamerInfo.avatar}
                      alt="Profile Picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {hasMounted && isLive && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                      LIVE
                    </div>
                  )}
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Hey, I&apos;m <span className="text-purple-400">{streamerInfo.name}</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-6 text-gray-300">
                {streamerInfo.tagline}
              </p>
              <p className="text-lg mb-8 text-gray-400 max-w-2xl">
                {streamerInfo.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={socialLinks.find(link => link.platform === 'Twitch')?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Twitch className="h-5 w-5" />
                  <span>Watch Live</span>
                  {hasMounted && isLive && <span className="text-sm">({formatViewCount(viewerCount)} viewers)</span>}
                </a>
                <button
                  onClick={() => {  
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <LiveClocks />
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`https://player.twitch.tv/?channel=maddwrath&parent=${twitchParents}`}
                  allowFullScreen
                  frameBorder="0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  title="Maddwrath Twitch Stream"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{formatViewCount(streamerInfo.totalFollowers)}</h3>
              <p className="text-muted-foreground">Followers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Play className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{formatViewCount(streamerInfo.totalViews)}</h3>
              <p className="text-muted-foreground">Total Views</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{streamerInfo.yearsStreaming}</h3>
              <p className="text-muted-foreground">Years Streaming</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">100+</h3>
              <p className="text-muted-foreground">Discord Members</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn more about my streaming journey and what makes our community special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">My Story</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I started streaming {streamerInfo.yearsStreaming} years ago with a simple goal: to share my passion for gaming 
                      and build a community where everyone feels welcome. What began as a hobby has grown into something 
                      amazing - a place where gamers from all walks of life come together to share laughs, epic moments, 
                      and genuine connections.
                    </p>
                    <p>
                      My favorite aspect of streaming isn&apos;t just the games themselves, but the incredible community that&apos;s 
                      formed around them. Whether we&apos;re playing role playing games like Old School Runescape, 
                      exploring new indie titles, or having late-night horror game sessions, every stream is an adventure 
                      we share together.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center h-full">
                <img
                  src="./Aaron.png"
                  alt="Aaron"
                  className="rounded-lg object-cover max-h-80 w-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects / Video Clips */}
      <section id="clips" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Video Clips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my recent video clips, collaborations, and community events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <iframe
                  src={`https://clips.twitch.tv/embed?clip=GenerousSingleSquirrelPoooound-Pb1xmp690QggELUv&parent=${twitchParents}`}
                  allowFullScreen
                  frameBorder="0"
                  className="w-full h-full"
                  title="Generous Single Squirrel"
                ></iframe>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <iframe
                  src={`https://clips.twitch.tv/embed?clip=PopularHeartlessAmazonPlanking-tqHsBZ2nbv4KqZzO&parent=${twitchParents}`}
                  allowFullScreen
                  frameBorder="0"
                  className="w-full h-full"
                  title="Popular Heartless Amazon"
                ></iframe>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.twitch.tv/maddwrath/clips?filter=clips&range=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>View More Clips</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stream Schedule */}
      <section id="schedule" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stream Schedule</h2>
            <p className="text-muted-foreground">
              Join me live on these days for epic gaming sessions!
            </p>
          </div>
          <div className="flex flex-row gap-x-4 overflow-x-auto pb-4 justify-center">
            {streamSchedule.map((schedule, index) => (
              <motion.div
                key={schedule.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-4 rounded-lg text-center shadow-lg shrink-0 min-w-[200px]"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{schedule.day}</h3>
                <p className="text-purple-600 font-semibold mb-2 text-sm">{schedule.time}</p>
                <p className="text-muted-foreground text-sm font-medium mb-1">{schedule.game}</p>
                <p className="text-muted-foreground text-xs">{schedule.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Community?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Follow me on Twitch and join our Discord community for exclusive content, events, and great vibes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={socialLinks.find(link => link.platform === 'Twitch')?.url || '#'}
                className="flex items-center justify-center space-x-2 bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Twitch className="h-5 w-5" />
                <span>Follow on Twitch</span>
              </Link>
              <Link
                href="https://discord.gg/A6Xddn4YEq"
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors backdrop-blur-sm"
              >
                <span>Join Discord</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question, collaboration idea, or just want to say hi? I&apos;d love to hear from you!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 shadow-lg"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
