import {Select} from "./Select";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Tprops: Story = {
    args: {
        cityData: [{id: '1', city: 'Penza'}, {id: '2', city: 'Zarechniy'}, {id: '3', city: 'Astana'}]
    }
};


