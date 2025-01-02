<template>
  <div id="app">
    <div class="video-container">
      <video
        ref="landingVideo"
        autoplay
        muted
        playsinline
        @ended="handleVideoEnd"
        class="fullscreen-video"
      >
        <source src="@/assets/마이크로페이지 영상시안04.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleVideoEnd() {
      // 동영상이 끝나면 특정 URL로 이동
      window.location.href = "https://www.genesis.com/kr/ko/main.html"; // 원하는 URL로 변경
    },
  },
};
</script>

<style>
/* 스타일링 */
body,
html {
  margin: 0;
  padding: 0;
  overflow: hidden; /* 스크롤 방지 */
  height: 100%;
}

.video-container {
  position: relative;
  width: 100%;
  height: 100vh; /* 화면 높이를 100%로 설정 */
  overflow: hidden;
}

.fullscreen-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 화면 꽉 채우기 */
  transform: translate(-50%, -50%);
}
</style>
