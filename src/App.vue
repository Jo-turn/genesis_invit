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
        <source src="@/assets/invitation_Video_250115.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleVideoEnd() {
      // 현재 시간 기록 (한국 표준시로 변환)
      const timestamp = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
      });

      fetch("/api/log-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ timestamp }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message); // 성공 메시지 출력
          // URL 이동
          window.location.href =
            "https://h-event.hyundai.com/event/electrified_gv70_drive";
        })
        .catch((error) => {
          console.error("Error logging visit:", error);
          // 실패 시에도 URL 이동 (옵션)
          window.location.href =
            "https://h-event.hyundai.com/event/electrified_gv70_drive";
        });
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
