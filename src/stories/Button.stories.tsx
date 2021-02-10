import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import { Button, ButtonProps } from "../components/Button/Button"

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: "Button"
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Button"
}

export const Large = Template.bind({})
Large.args = {
  size: "large",
  label: "Button"
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
  label: "Button"
}

const Template2: Story<ButtonProps> = (args) => (
  <>
    {Array.from(new Array(30)).map((_, index) => (
      <div key={`button_${index}`}>
        <Button {...args} />
      </div>
    ))}
  </>
)

export const Loop = Template2.bind({})
Loop.args = {
  size: "small",
  label: "Loop"
}
