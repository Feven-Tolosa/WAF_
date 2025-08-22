const VideoBackground = () => {
  return (
    <div className='video-bg-container'>
      <video autoPlay muted loop playsInline>
        <source
          src='https://assets.mixkit.co/videos/preview/mixkit-ethiopian-highlands-landscape-11705-large.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoBackground
