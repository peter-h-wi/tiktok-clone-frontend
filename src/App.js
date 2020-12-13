import axios from "./axios";
import React, {useEffect, useState} from "react";
import './App.css';
import Video from "./Video";

function App() {
  // connecting backend through useEffect
  // when App component loads, run this code
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
      // BEM naming convention
    <div className="app">
      <div className={"app_videos"}>
        {videos.map(({url, channel, description, song, likes, messages, shares}) =>
          (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>

      {/* app container */}
          {/* videos */}
          {/* <Video /> */}
          {/* <Video /> */}
          {/* <Video /> */}
    </div>
  );
}

export default App;
