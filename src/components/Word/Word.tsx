import { useMemo, useRef } from 'react';
import { useObserveSize } from '../../hooks/useObserveSize';
import { getGlobalCounter } from '../../utils/globalCounter';
import Bracket from './Bracket';
import WordCss from './Word.module.css';

const ANCHOR_WIDTH = 5;

const COLORS = [
	{ class: 'text-white', hex: "#fff" },
	// { class: 'text-purple-600', hex: "#8B5CF6" },
	// { class: 'text-indigo-600', hex: "#6366F1" },
	// { class: 'text-teal-600', hex: "#14B8A6" },
	// { class: 'text-orange-600', hex: "#F97316" },
	// { class: 'text-cyan-600', hex: "#06B6D4" }
]

export default function Word({ children, explanation, bottomExplanation, bottomColor }: {
	children: string
	explanation: string
	bottomExplanation?: string
	bottomColor?: { class: string, hex: string }
}) {
	const explanationDiv = useRef<HTMLDivElement>(null);
	const childrenDiv = useRef<HTMLDivElement>(null);
	const bottomExplanationDiv = useRef<HTMLDivElement>(null);

	const explanationDims = useObserveSize({ observedDiv: explanationDiv });
	const childrenDims = useObserveSize({ observedDiv: childrenDiv });
	const bottomExplanationDims = useObserveSize({ observedDiv: bottomExplanationDiv });

	const colorChoice = useMemo(() => {
		return COLORS[getGlobalCounter() % COLORS.length];
	}, []);

	return (
		<div className="inline-flex flex-col content-center items-center">
			<div className={colorChoice.class} ref={explanationDiv}>{explanation}</div>
			<Bracket rotate={false} color={colorChoice.hex} width={ANCHOR_WIDTH} />
			{/* <Bracket rotate color={colorChoice.hex} width={childrenDims.width} /> */}

			<div
				className={`${WordCss.Word} ${colorChoice.class} font-bold text-xl`} ref={childrenDiv}>{children}</div>

			{
				bottomExplanation && (
					<>
						{/* <Bracket rotate={false} color={bottomColor?.hex || colorChoice.hex} width={childrenDims.width} /> */}
						<Bracket rotate color={bottomColor?.hex || colorChoice.hex} width={ANCHOR_WIDTH} />
						<div className={bottomColor?.class || colorChoice.class} ref={bottomExplanationDiv}>{bottomExplanation}</div>
					</>
				)
			}
		</div >
	)
}