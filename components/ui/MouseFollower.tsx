'use client';

import React, { useEffect, useRef } from 'react';

const MouseFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse/trackpad)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const follower = followerRef.current;
    if (!follower) return;

    let posX = window.innerWidth / 2;
    let posY = window.innerHeight / 2;
    let mouseX = posX;
    let mouseY = posY;
    let currentScale = 1;
    let targetScale = 1;
    let isHovering = false;
    let isPressed = false;
    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible && follower) {
        isVisible = true;
        follower.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (follower) {
        follower.style.opacity = '0';
        isVisible = false;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-card') ||
        window.getComputedStyle(target).cursor === 'pointer';

      isHovering = !!isClickable;
    };

    // Haptic touch/click feel
    const handlePointerDown = () => {
      isPressed = true;
      // Hardware haptic trigger on supported devices
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate(12);
        } catch (_) {}
      }
    };

    const handlePointerUp = () => {
      isPressed = false;
    };

    let animationFrameId: number;
    const updatePosition = () => {
      // Smooth physical lag
      posX += (mouseX - posX) * 0.18;
      posY += (mouseY - posY) * 0.18;

      // Realistic physical tactile response:
      // When pressed down, the shadow compresses closer to the surface (squish)
      // When hovering over interactive buttons, the shadow expands softly
      if (isPressed) {
        targetScale = 0.65;
      } else if (isHovering) {
        targetScale = 1.45;
      } else {
        targetScale = 1.0;
      }

      currentScale += (targetScale - currentScale) * 0.22;

      if (follower) {
        // Offset by 24px (half of 48px width/height)
        follower.style.transform = `translate3d(${posX - 24}px, ${posY - 24}px, 0) scale(${currentScale})`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });

    updatePosition();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="hidden md:block fixed pointer-events-none z-50 left-0 top-0 opacity-0 transition-opacity duration-300"
      style={{
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
    >
      {/* Tactile Ambient Drop Shadow Disc */}
      <div
        className="w-12 h-12 rounded-full transition-all duration-150"
        style={{
          background:
            'radial-gradient(circle, rgba(15, 23, 42, 0.16) 0%, rgba(15, 23, 42, 0.07) 48%, rgba(15, 23, 42, 0) 70%)',
          filter: 'blur(3px)',
        }}
      />
      {/* Subtle core shadow indentation */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
        style={{
          background: 'rgba(15, 23, 42, 0.12)',
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
};

export default MouseFollower;
