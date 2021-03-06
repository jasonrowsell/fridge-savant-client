import LoginForm from '.'
import { render, fireEvent } from "@testing-library/react"

let defaultProps;

describe("<loginForm />", () => {
  beforeEach(() => {
    defaultProps = {
      handleLoginSubmit: jest.fn(),
      handleCardFlip: jest.fn(),
      handleChange: jest.fn()
    }
  })

  it("should display the form labels", () => {
    const rendered = render(<LoginForm />)
    
    expect(rendered.getByTestId("loginTitle")).toBeTruthy()
    expect(rendered.getByTestId("signUpLink")).toBeTruthy()
    expect(rendered.getByTestId("loginButton")).toBeTruthy()
  })

  // it("should call handleSubmitClick when login button is clicked", () => {
  //   const rendered = render(<LoginForm />)

  //   fireEvent.change(rendered.getByTestId("loginEmail"), { target: { value: 'testEmail@email.com' } })

  //   expect(defaultProps.handleChange).toHaveBeenCalledTimes(1)
    
  // })

  // it("should call handleSignUpClick when signUp button is clicked", () => {
  //   const rendered = render(<LoginForm />)

  //   fireEvent.click(rendered.getByTestId("signUpLink"))

  //   expect(defaultProps.handleSignUpClick).toHaveBeenCalledTimes(1)
    
  // })

})