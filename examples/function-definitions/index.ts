function casualFunction() {
  console.log('Hello World')
}

const lambdaFunction = () => {
  console.log('Hello World')
}

function withDefaultParameter(name = 'World') {
  console.log(`Hello ${name}`)
}

function withOptionalParameter(name?: string) {
  if (name) {
    console.log(`Hello ${name}`)
  } else {
    console.log('Hello World')
  }
}

withDefaultParameter()
withOptionalParameter()