import { gsap } from 'gsap';

/**
 * Slide in an element from a direction
 */
export function slideIn(
	element: HTMLElement,
	direction: 'left' | 'right' | 'top' | 'bottom' = 'right'
): gsap.core.Tween {
	const positions = {
		left: { x: -100, y: 0 },
		right: { x: 100, y: 0 },
		top: { x: 0, y: -100 },
		bottom: { x: 0, y: 100 }
	};

	const { x, y } = positions[direction];

	return gsap.from(element, {
		x: `${x}%`,
		y: `${y}%`,
		opacity: 0,
		duration: 0.8,
		ease: 'power2.out'
	});
}

/**
 * Swirl/spin entrance animation
 */
export function swirl(element: HTMLElement): gsap.core.Tween {
	return gsap.from(element, {
		rotation: 360,
		scale: 0,
		opacity: 0,
		duration: 1,
		ease: 'back.out(1.7)'
	});
}

/**
 * Animate a number counting up
 */
export function countUp(
	element: HTMLElement,
	target: number,
	duration: number = 1.5
): gsap.core.Tween {
	const obj = { value: 0 };
	return gsap.to(obj, {
		value: target,
		duration,
		ease: 'power1.out',
		onUpdate: () => {
			element.textContent = Math.round(obj.value).toLocaleString();
		}
	});
}

/**
 * Stagger reveal for list items
 */
export function staggerReveal(elements: HTMLElement[]): gsap.core.Tween {
	return gsap.from(elements, {
		y: 30,
		opacity: 0,
		duration: 0.5,
		stagger: 0.1,
		ease: 'power2.out'
	});
}

/**
 * Polaroid-style photo drop animation
 */
export function polaroidDrop(element: HTMLElement): gsap.core.Tween {
	return gsap.from(element, {
		y: -200,
		rotation: gsap.utils.random(-15, 15),
		opacity: 0,
		duration: 0.8,
		ease: 'bounce.out'
	});
}

/**
 * Fade in with scale
 */
export function fadeScale(element: HTMLElement): gsap.core.Tween {
	return gsap.from(element, {
		scale: 0.8,
		opacity: 0,
		duration: 0.6,
		ease: 'power2.out'
	});
}

/**
 * Create a timeline for complex animations
 */
export function createTimeline(defaults?: gsap.TimelineVars): gsap.core.Timeline {
	return gsap.timeline(defaults);
}
