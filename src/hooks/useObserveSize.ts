import { useEffect, useState } from "react";

export const useObserveSize = ({
	observedDiv,
}: {
	observedDiv: React.RefObject<HTMLDivElement>
}) => {
	const [dims, setDims] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (!observedDiv.current) {
			return;
		}

		const resizeObserver = new ResizeObserver(() => {
			if (!observedDiv.current) {
				return;
			}

			if (observedDiv.current.offsetWidth !== dims.width || observedDiv.current.offsetHeight !== dims.height) {
				setDims({
					width: observedDiv.current.offsetWidth,
					height: observedDiv.current.offsetHeight
				});
			}
		});

		resizeObserver.observe(observedDiv.current);

		return function cleanup() {
			resizeObserver.disconnect();
		}
	});

	return dims;
}