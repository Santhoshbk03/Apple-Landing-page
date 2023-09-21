import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
  TweakpaneUiPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollAnimation } from "../../lib/Scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const Webgiviwer = () => {
  const [needsupdate, setneedsupdate] = useState(true);
  const canvasref = useRef(null);

  const memoizedscrollanimation = useCallback((position, target, OnUpdate) => {
    if (position && target && OnUpdate) {
      ScrollAnimation(position, target, OnUpdate);
    }
  }, []);

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasref.current,
    });

    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer?.scene.activeCamera;
    const position = camera?.position;
    const target = camera?.target;

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    viewer.renderer.refreshPipeline();

    await manager.addFromPath("/scene-black.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    // viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
    // window.screenTop(0, 0);

    const OnUpdate = () => {
      //   console.log("onupdate working");
      setneedsupdate(!needsupdate);
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsupdate) {
        camera.positionTargetUpdated(true);
        setneedsupdate((prev) => (prev = false));
      }
    });
    memoizedscrollanimation(position, target, OnUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasref} />
    </div>
  );
};

export default Webgiviwer;
