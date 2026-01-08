<script lang="ts">
  import SlideContainer from '$lib/components/SlideContainer.svelte';
  import {
    IntroSlide,
    PhotoSlide,
    GradesSlide,
    GamingIntroSlide,
    SteamSlide,
    DiscordSlide,
    SpotifySlide,
    RaycastSlide,
    CodingSlide,
    ConclusionSlide,
    ClaudeSlide,
    AIAgentSlide,
    AIMetaSlide
  } from '$lib/components/slides';

  // Data imports
  import spotifyData from '$lib/parsed/spotify';
  import discordData from '$lib/parsed/discord';
  import raycastData from '$lib/parsed/raycast';
  import wakatimeData from '$lib/parsed/wakatime';
  import gradesData from '$lib/parsed/grades';
  import claudeData from '$lib/parsed/claude';
  import aiagentData from '$lib/parsed/aiagent';
  import steamData from '$lib/parsed/steam';

  // Image imports
  import firstImage from '$lib/assets/first_image.png';
  import middleImage1 from '$lib/assets/middle_image_1.jpeg';
  import middleImage2 from '$lib/assets/middle_image_2.jpeg';
  import lastImage from '$lib/assets/last_image.png';
  import raycastSummary from '$lib/assets/raycast-summary.png';
  import raycastApplications from '$lib/assets/raycast-applications.png';
  import raycastExtensions from '$lib/assets/raycast-extensions.png';
  import raycastUsage from '$lib/assets/raycast-usage.png';

  const TOTAL_SLIDES = 15;
</script>

<svelte:head>
  <title>morgan's wrapped wrapped | 2025</title>
</svelte:head>

<SlideContainer totalSlides={TOTAL_SLIDES}>
  {#snippet children(currentSlide)}
    <!-- Slide 1: Intro -->
    <IntroSlide active={currentSlide === 0} />

    <!-- Slide 2: First Photo -->
    <PhotoSlide
      active={currentSlide === 1}
      images={[firstImage]}
      layout="single"
      header="what was morgan doing at the start of the year???"
      caption="backpacking in the valleys... taken jan 1 @ 4:29pm"
    />

    <!-- Slide 3: Grades -->
    <GradesSlide active={currentSlide === 2} data={gradesData} />

    <!-- Slide 4: Gaming Intro -->
    <GamingIntroSlide active={currentSlide === 3} />

    <!-- Slide 5: Steam -->
    <SteamSlide active={currentSlide === 4} data={steamData} />

    <!-- Slide 6: Discord -->
    <DiscordSlide active={currentSlide === 5} data={discordData} />

    <!-- Slide 7: Middle Photos -->
    <PhotoSlide
      active={currentSlide === 6}
      images={[middleImage1, middleImage2]}
      layout="dual"
      header="what was morgan doing in the middle of the year??"
      captions={['jul 1 @ 7:29pm', 'jul 3 @ 7:58pm']}
      caption="we get two photos b/c he has no photo from july 2 (the most middlest day of the year)"
    />

    <!-- Slide 8: Spotify -->
    <SpotifySlide active={currentSlide === 7} data={spotifyData} />

    <!-- Slide 9: Raycast -->
    <RaycastSlide
      active={currentSlide === 8}
      data={raycastData}
      images={{
        summary: raycastSummary,
        applications: raycastApplications,
        extensions: raycastExtensions,
        usage: raycastUsage
      }}
    />

    <!-- Slide 10: Coding -->
    <CodingSlide active={currentSlide === 9} data={wakatimeData} />

    <!-- Slide 11: Claude -->
    <ClaudeSlide active={currentSlide === 10} data={claudeData} />

    <!-- Slide 12: AI Agent -->
    <AIAgentSlide active={currentSlide === 11} data={aiagentData} />

    <!-- Slide 13: Final Photo -->
    <PhotoSlide
      active={currentSlide === 12}
      images={[lastImage]}
      layout="single"
      header="what was morgan doing on the last day of the year??"
      caption="apparently taking photos of his face, dec 31 @ 5:41pm"
    />

    <!-- Slide 14: Conclusion -->
    <ConclusionSlide active={currentSlide === 13} />

    <!-- Slide 15: AI Meta (P.S.) -->
    <AIMetaSlide active={currentSlide === 14} />
  {/snippet}
</SlideContainer>
