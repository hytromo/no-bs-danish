import { useRef } from 'react';
import { useObserveSize } from '../../hooks/useObserveSize';
import Bracket from './Bracket';
import WordCss from './Word.module.css';

export default function Word({ children, explanation }: {
	children: React.ReactNode
	explanation: string
}) {
	const explanationDiv = useRef<HTMLDivElement>(null);
	const childrenDiv = useRef<HTMLDivElement>(null);

	const explanationDims = useObserveSize({ observedDiv: explanationDiv });
	const childrenDims = useObserveSize({ observedDiv: childrenDiv });


	return (
		<div className="inline-flex flex-col content-center items-center">
			<div ref={explanationDiv}>{explanation}</div>
			<Bracket rotate={false} color="orange" width={explanationDims.width} />
			<Bracket rotate color="orange" width={childrenDims.width} />
			<div ref={childrenDiv} className={WordCss.Word}>{children}</div>
		</div>
	)
}