import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import makeHomePage from '../factory/home-page/home-page.factory'
import { FeedContainer } from '@/view/components/activity-feed/feed-container'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={makeHomePage()}>
          <Route path="/" element={<FeedContainer />} />
          <Route path="/explore" element={<h1>Explore</h1>} />
          <Route path="/reels" element={<h1>reels</h1>} />
          <Route path="/messages" element={<h1>messages</h1>} />
          <Route path="/notifications" element={<h1>notifications</h1>} />
          <Route path="/create" element={<h1>create</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
        </Route>
        <Route path="*" element={<h1>404 ERROR</h1>} />
      </Routes>
    </BrowserRouter>
  );

}
