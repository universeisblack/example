import { forwardRef, createElement, type ReactSVG } from 'react';
import { type SvgProps, Svg } from 'react-native-svg';
import { childDefaultAttributes, defaultAttributes } from './defaultAttributes';
import SvgElements from './objects';

type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];
interface IconProps extends SvgProps {
	size?: string | number;
}

const createIcon = (iconName: string, iconNode: IconNode) => {
	const Component = forwardRef(
		(
			{
				color = 'currentColor',
				size = 48,
				children,
				...rest
			}: IconProps,
			ref,
		) => {
			const customAttrs = {
				stroke: color,
				...rest,
			};

			return createElement(
				Svg as unknown as string,
				{
					ref,
					...defaultAttributes,
					width: size,
					height: size,
					...customAttrs,
				},
				[
					...iconNode.map(([tag, attrs, ...children]) => {
						return createElement(SvgElements[tag], { ...childDefaultAttributes, ...customAttrs, ...attrs, children } as IconProps);
					}),
				],
			);
		},
	);

	Component.displayName = `${iconName}`;

	return Component;
};

export default createIcon;
