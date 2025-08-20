


# Reference
[actionability](https://playwright.dev/docs/actionability)

| Action                           | Visible | Stable | Receives Events | Enabled | Editable |
|----------------------------------|---------|--------|-----------------|---------|----------|
| locator.check()                  | Yes     | Yes    | Yes             | Yes     | -        |
| locator.click()                  | Yes     | Yes    | Yes             | Yes     | -        |
| locator.dblclick()               | Yes     | Yes    | Yes             | Yes     | -        |
| locator.setChecked()             | Yes     | Yes    | Yes             | Yes     | -        |
| locator.tap()                    | Yes     | Yes    | Yes             | Yes     | -        |
| locator.uncheck()                | Yes     | Yes    | Yes             | Yes     | -        |
| locator.hover()                  | Yes     | Yes    | Yes             | -       | -        |
| locator.dragTo()                 | Yes     | Yes    | Yes             | -       | -        |
| locator.screenshot()             | Yes     | Yes    | -               | -       | -        |
| locator.fill()                   | Yes     | -      | -               | Yes     | Yes      |
| locator.clear()                  | Yes     | -      | -               | Yes     | Yes      |
| locator.selectOption()           | Yes     | -      | -               | Yes     | -        |
| locator.selectText()             | Yes     | -      | -               | -       | -        |
| locator.scrollIntoViewIfNeeded() | -       | Yes    | -               | -       | -        |
| locator.blur()                   | -       | -      | -               | -       | -        |
| locator.dispatchEvent()          | -       | -      | -               | -       | -        |
| locator.focus()                  | -       | -      | -               | -       | -        |
| locator.press()                  | -       | -      | -               | -       | -        |
| locator.pressSequentially()      | -       | -      | -               | -       | -        |
| locator.setInputFiles()          | -       | -      | -               | -       | -        |

# Focus

| Assertion                          | Description                       |
|------------------------------------|-----------------------------------|
| expect(locator).toBeAttached()     | Element is attached               |
| expect(locator).toBeChecked()      | Checkbox is checked               |
| expect(locator).toBeDisabled()     | Element is disabled               |
| expect(locator).toBeEditable()     | Element is editable               |
| expect(locator).toBeEmpty()        | Container is empty                |
| expect(locator).toBeEnabled()      | Element is enabled                |
| expect(locator).toBeFocused()      | Element is focused                |
| expect(locator).toBeHidden()       | Element is not visible            |
| expect(locator).toBeInViewport()   | Element intersects viewport       |
| expect(locator).toBeVisible()      | Element is visible                |
| expect(locator).toContainText()    | Element contains text             |
| expect(locator).toHaveAttribute()  | Element has a DOM attribute       |
| expect(locator).toHaveClass()      | Element has a class property      |
| expect(locator).toHaveCount()      | List has exact number of children |
| expect(locator).toHaveCSS()        | Element has CSS property          |
| expect(locator).toHaveId()         | Element has an ID                 |
| expect(locator).toHaveJSProperty() | Element has a JavaScript property |
| expect(locator).toHaveText()       | Element matches text              |
| expect(locator).toHaveValue()      | Input has a value                 |
| expect(locator).toHaveValues()     | Select has options selected       |
| expect(page).toHaveTitle()         | Page has a title                  |
| expect(page).toHaveURL()           | Page has a URL                    |
| expect(response).toBeOK()          | Response has an OK status         |