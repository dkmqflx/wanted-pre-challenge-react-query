## 구현 화면

- 로그인

  - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 됩니다.

  https://user-images.githubusercontent.com/42763164/208599972-44b4ccd4-cbda-47ef-8c28-85517976b14f.mov

- 회원가입

  - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 됩니다.

  https://user-images.githubusercontent.com/42763164/208599642-ee2cc7ae-c6ef-4992-b506-ead5c7656e86.mov

- 추가

  - 모달창에서 새로운 데이터를 입력할 수 있습니다.

  https://user-images.githubusercontent.com/42763164/208600051-8974ab29-5a4e-4043-8402-8926faef248d.mov

- 수정

  - 모달창에서 기존의 데이터를 수정할 수 있습니다.

  https://user-images.githubusercontent.com/42763164/208600014-4348a825-a575-4b81-8d48-599391ac3524.mov

<br/>

## 실행 방법

```
  # server

  $ yarn install

  $ yarn start

  # client

  $ yarn install

  $ yarn dev

```

- 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

- 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)

- node v16.16.0 버전에서 진행하였습니다.

<br/>

## 과제 구현 사항 목록

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다

  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다

  - 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요

- 이메일과 비밀번호의 유효성을 확인합니다

  - 이메일 조건 : 최소 `@`, `.` 포함

  - 비밀번호 조건 : 8자 이상 입력

  - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요

  - 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요

  - 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요

  - 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

<br/>

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요

  - 목록 / 상세 영역으로 나누어 구현해주세요

  - Todo 목록을 볼 수 있습니다.

  - Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.

  - Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.

  - Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.

  - 새로고침을 했을 때 현재 상태가 유지되어야 합니다.

  - 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.

- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

<br/>

## 기술 스택

- Next.js, React Query, React Hook Form

<br/>

## 폴더 구조

```bash

├── pages # 주소에 해당하는 페이지
├── src
	  ├── components
			  ├──  common # 공통으로 사용되는 컴포넌트 정의
		├── constants
		├── hooks # custom hooks
		├── quries # query를 도메인별로 각각 다른 파일로 관리
		├── service # 기능에 따른 서비스 모듈을 모아둔 폴더
		├── type # 공통으로 사용되는 type 정의
		└── utils
```

<br/>

## 과제 진행시 고민한 부분

### Button 컴포넌트의 재사용성

- Button 컴포넌트 같은 경우 로그인, 회원가입 페이지에서 아래처럼 총 두가지 경우 방식으로 사용되었기 때문에 각각의 케이스에 대응할 수 있도록 컴포넌트를 작성해주었습니다.

  - form의 submit

  - a tag를 이용한 페이지 라우팅 (next/link 사용)

- 입력 조건을 만족했을 때 버튼의 색깔이 변경되었기 때문에 이 부분도 함께 처리해주었습니다.

- 우선 페이지 라우팅의 경우에는 next.js의 `Link` 태그로 Button 컴포넌트를 감싸준다음 `passHref`와 `href`값을 전달해주었는데 href의 값의 전달 여부에 따라서 `<a>` 태그의 사용 유무를 결정했습니다.

- 그리고 자식 컴포넌트가 함수형 컴포넌트인 경우 `ref`가 컴포넌트로 전달되어 `forwardRef`로 컴포넌트를 감싸주어야 했기 때문에 `forwardRef`로 컴포넌트를 감싸준 다음 `ref`에 사용되는 타입과 `Props`의 타입을 지정해주었습니다.

- 마지막으로 active 값은 입력 조건을 만족했을 때 true가 전달되어 해당 버튼의 색깔이 변경되도록 처리해주었습니다.

```jsx
// src/components/common/Button.tsx

...

type buttonType = React.HTMLProps<HTMLAnchorElement> & {
  href?: 'string';
  children: string;
  type?: 'button' | 'submit';
  active?: boolean;
};

const Button = forwardRef<HTMLAnchorElement, buttonType>(
  ({ href, children, type, active = true }, ref) => {
    return href ? (
      <ButtonWrapper>
        <a href={href} ref={ref}>
          <ButtonStyled active={active} type={type}>
            {children}
          </ButtonStyled>
        </a>
      </ButtonWrapper>
    ) : (
      <ButtonWrapper>
        <ButtonStyled active={active} type={type}>
          {children}
        </ButtonStyled>
      </ButtonWrapper>
    );
  }
);

export default Button;

...
```

---

### 서비스 모듈 분리

- 구현에 필요한 기능은 크게 인증과 Todo로 나눌 수 있었기 때문에 각각의 기능에 따라 AuthService, TodoService라는 클래스를 만든 다음 클래스 내부에 필요한 기능을 정의했습니다.

- 이 때 토큰을 설정하고 가져오는 기능을 담당하는 TokenService라는 클래스가 있었는데 토큰과 관련된 기능이 TodoService에도 사용되었습니다.

- 두 클래스 간의 관계가 부모 자식 관계를 가지지 않기 때문에 Dependency Injection으로 TokenService 클래스의 인스턴스를 전달해서 TodoService에서 토큰과 관련된 기능을 사용할 수 있도록 처리했습니다.

- 그리고 Dependency Injection으로 전달받는 TokenService의 타입을 TokenService에 필요한 기능을 정의한 인터페이스로 지정해주었습니다.
- 이를 통해서 두 클래스가 너무 coupling되지 않고 인터페이스로 상호작용을 할 수 있도록 처리했습니다.

```jsx
// service/auth.service.ts

import axios from 'axios';
import { BASE_URL } from '@constants/http';
import { loginInputType } from '@type/auth.types';

class AuthService {
  private request;

  constructor() {
    this.request = axios.create({
      baseURL: BASE_URL,
    });
  }

  async login({ email, password }: loginInputType) {
    const { data } = await this.request.post('/users/login', {
      email,
      password,
    });

    return data;
  }

  async signup({ email, password }: loginInputType) {
    const { data } = await this.request.post('/users/create', {
      email,
      password,
    });

    return data;
  }
}

export default new AuthService();
```

<br/>

```jsx
// service/todo.service.ts

import axios from 'axios';
import TokenService from './token.service';
import { TokenServiceImp } from './token.service';
import { BASE_URL } from '@constants/http';

class TodoService {
  private http;

  constructor(private tokenService: TokenServiceImp) {
    this.http = axios.create({
      baseURL: BASE_URL,
    });
  }

  setInterCepters() {
    const token = this.tokenService.getToken();

    this.http.interceptors.request.use((req) => {
      if (req.headers) {
        req.headers.authorization = token;
      }
      return req;
    });

    this.http.interceptors.response.use(
      (response) => {
        return response;
      },
      () => {
        if (window.confirm('에러가 발생했습니다. 다시 로그인해주세요')) {
          this.tokenService.deleteToken();
        }
      }
    );
  }

  async getTodos() {
    this.setInterCepters();
    const { data } = await this.http.get('/todos');

    return data.data;
  }

  async getTodoById(id?: string) {
    this.setInterCepters();
    const { data } = await this.http.get(`/todos/${id}`);
    return data.data;
  }

  async createTodo(title: string, content: string) {
    this.setInterCepters();
    const { data } = await this.http.post('/todos', { title, content });
    return data.data;
  }

  async updateTodo(id: string, title: string, content: string) {
    this.setInterCepters();
    const { data } = await this.http.put(`/todos/${id}`, { title, content });
    return data.data;
  }

  async deleteTodo(id: string) {
    this.setInterCepters();
    const { data } = await this.http.delete(`/todos/${id}`);
    return data.data;
  }
}

export default new TodoService(TokenService);
```

<br/>

```jsx
// service/token.service.ts

export interface TokenServiceImp {
  getToken(): string | null;
  setToken(token: string): void;
  deleteToken(): void;
}

class TokenService implements TokenServiceImp {
  getToken() {
    return localStorage.getItem('token-todo');
  }

  setToken(token: string) {
    localStorage.setItem('token-todo', token);
  }

  deleteToken() {
    localStorage.removeItem('token-todo');
  }
}

export default new TokenService();
```

---

### React Query에 의존성 역전 원칙 적용

- 데이터를 처리하기 위해서 React Query에 정의된 useQuery나 useMutation 같은 hook을 그대로 사용하게 되면 React Query에 의존성을 갖게 됩니다.

- 따라서 외부 변경으로 인한 영향을 최소화하기 위해 useRequest라는 hook을 정의하고 필요한 인터페이스를 새롭게 정의해주었습니다.

```jsx
// hooks/useRequest.ts

import { useMutation, useQuery, QueryKey } from '@tanstack/react-query';

type requestOptionType<TData, TError> = {
  onSuccess?: (data: TData) => void,
  onError?: (error: TError) => void,
  enabled?: boolean,
};

type mutateOptionType<TData, TError, TVariables> = {
  onSuccess?: (data: TData, variables?: TVariables) => void,
  onError?: (error: TError) => void,
};

export const useRequest = <TError, TData>(
  key: QueryKey,
  request: () => TData | Promise<TData>,
  option?: requestOptionType<TData, TError>
) => {
  return useQuery(key, request, { ...option });
};

export const useMutate = <TData, TError, TVariables>(
  mutationFn: (data: TVariables) => Promise<TData>,
  option?: mutateOptionType<TData, TError, TVariables>
) => {
  return useMutation(mutationFn, { ...option });
};
```
