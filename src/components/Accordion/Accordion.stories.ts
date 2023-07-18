import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from "./Accordion";

const meta: Meta<typeof Accordion> = {
    title: 'Example/Accordion',
    component: Accordion,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const TAccordionProps: Story = {
    args: {
        title: 'Hello',
        collapsed: false,
        items: ['Alex', 'Ksu', 'lev', 'Alex'],
        setCollapsed: (x) => x
    }
};


