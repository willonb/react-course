import React from "react";
import { render } from "@testing-library/react";
import Square from "../Square"

describe('vou realizar alguns teste com square', () => {
  it('verifica se o width do square', () => {
    const element = render(<Square />)
  
    expect(element)
  })
}) 