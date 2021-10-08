#redux-toolkit

- 참고자료 : https://clelab.io/course/redux/redux-toolkit
- 참고자료 : https://blog.rhostem.com/posts/2020-03-04-redux-toolkits

```
yarn add @reduxjs/toolkit
```

1. redux-action
2. reselect
3. immer의 produce
4. redux-thunk
5. Flux Standard Action 강제화
6. Type Definition

---

## 1. redux-action

- 사용 이유 : 너무 많은 코드가 생성되는 것 방지

## 2. immer

- 사용 이유 : 불변성을 지켜야하는 원칙때문에

## 3. reselect

- 사용 이유 : store 값을 효율적으로 핸들링하여 불필요한 랜더링을 막기 위해

## 4. thunk, saga

- 사용 이유 : 비동기를 수월하게 하기위해
