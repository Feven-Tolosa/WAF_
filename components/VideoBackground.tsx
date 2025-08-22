const VideoBackground = () => {
  return (
    <div className='video-bg-container'>
      <video autoPlay muted loop playsInline>
        <source src={'/videos/darkMV.webm'} type='video/webm' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoBackground
