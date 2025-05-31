import type { CancelablePromise } from "./core/CancelablePromise"
import { OpenAPI } from "./core/OpenAPI"
import { request as __request } from "./core/request"
import type {
  ItemsReadItemsData,
  ItemsReadItemsResponse,
  ItemsCreateItemData,
  ItemsCreateItemResponse,
  ItemsReadItemData,
  ItemsReadItemResponse,
  ItemsUpdateItemData,
  ItemsUpdateItemResponse,
  ItemsDeleteItemData,
  ItemsDeleteItemResponse,
  LoginLoginAccessTokenData,
  LoginLoginAccessTokenResponse,
  LoginTestTokenResponse,
  LoginRecoverPasswordData,
  LoginRecoverPasswordResponse,
  LoginResetPasswordData,
  LoginResetPasswordResponse,
  LoginRecoverPasswordHtmlContentData,
  LoginRecoverPasswordHtmlContentResponse,
  PrivateCreateUserData,
  PrivateCreateUserResponse,
  UsersReadUsersData,
  UsersReadUsersResponse,
  UsersCreateUserData,
  UsersCreateUserResponse,
  UsersReadUserMeResponse,
  UsersDeleteUserMeResponse,
  UsersUpdateUserMeData,
  UsersUpdateUserMeResponse,
  UsersUpdatePasswordMeData,
  UsersUpdatePasswordMeResponse,
  UsersRegisterUserData,
  UsersRegisterUserResponse,
  UsersReadUserByIdData,
  UsersReadUserByIdResponse,
  UsersUpdateUserData,
  UsersUpdateUserResponse,
  UsersDeleteUserData,
  UsersDeleteUserResponse,
  UtilsTestEmailData,
  UtilsTestEmailResponse,
  UtilsHealthCheckResponse,
} from "./types.gen"

export class ItemsService {
  public static readItems(
    data: ItemsReadItemsData = {},
  ): CancelablePromise<ItemsReadItemsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/items/",
      query: {
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static createItem(
    data: ItemsCreateItemData,
  ): CancelablePromise<ItemsCreateItemResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/items/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static readItem(
    data: ItemsReadItemData,
  ): CancelablePromise<ItemsReadItemResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/items/{id}",
      path: {
        id: data.id,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static updateItem(
    data: ItemsUpdateItemData,
  ): CancelablePromise<ItemsUpdateItemResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/items/{id}",
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static deleteItem(
    data: ItemsDeleteItemData,
  ): CancelablePromise<ItemsDeleteItemResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/items/{id}",
      path: {
        id: data.id,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class LoginService {
  public static loginAccessToken(
    data: LoginLoginAccessTokenData,
  ): CancelablePromise<LoginLoginAccessTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/login/access-token",
      formData: data.formData,
      mediaType: "application/x-www-form-urlencoded",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static testToken(): CancelablePromise<LoginTestTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/login/test-token",
    })
  }

  public static recoverPassword(
    data: LoginRecoverPasswordData,
  ): CancelablePromise<LoginRecoverPasswordResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/password-recovery/{email}",
      path: {
        email: data.email,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static resetPassword(
    data: LoginResetPasswordData,
  ): CancelablePromise<LoginResetPasswordResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/reset-password/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static recoverPasswordHtmlContent(
    data: LoginRecoverPasswordHtmlContentData,
  ): CancelablePromise<LoginRecoverPasswordHtmlContentResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/password-recovery-html-content/{email}",
      path: {
        email: data.email,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class PrivateService {
  public static createUser(
    data: PrivateCreateUserData,
  ): CancelablePromise<PrivateCreateUserResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/private/users/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static createDefaultUser(): CancelablePromise<PrivateCreateUserResponse> {
    return __request(OpenAPI, {
      method: "POST", 
      url: "/api/v1/private/users/default",
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class UsersService {
  public static readUsers(
    data: UsersReadUsersData = {},
  ): CancelablePromise<UsersReadUsersResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users/",
      query: {
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static createUser(
    data: UsersCreateUserData,
  ): CancelablePromise<UsersCreateUserResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/users/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static readUserMe(): CancelablePromise<UsersReadUserMeResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users/me",
    })
  }

  public static deleteUserMe(): CancelablePromise<UsersDeleteUserMeResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/users/me",
    })
  }

  public static updateUserMe(
    data: UsersUpdateUserMeData,
  ): CancelablePromise<UsersUpdateUserMeResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users/me",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static updatePasswordMe(
    data: UsersUpdatePasswordMeData,
  ): CancelablePromise<UsersUpdatePasswordMeResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users/me/password",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static registerUser(
    data: UsersRegisterUserData,
  ): CancelablePromise<UsersRegisterUserResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/users/signup",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static readUserById(
    data: UsersReadUserByIdData,
  ): CancelablePromise<UsersReadUserByIdResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users/{user_id}",
      path: {
        user_id: data.userId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static updateUser(
    data: UsersUpdateUserData,
  ): CancelablePromise<UsersUpdateUserResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users/{user_id}",
      path: {
        user_id: data.userId,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static deleteUser(
    data: UsersDeleteUserData,
  ): CancelablePromise<UsersDeleteUserResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/users/{user_id}",
      path: {
        user_id: data.userId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class UtilsService {
  public static testEmail(
    data: UtilsTestEmailData,
  ): CancelablePromise<UtilsTestEmailResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/utils/test-email/",
      query: {
        email_to: data.emailTo,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  public static healthCheck(): CancelablePromise<UtilsHealthCheckResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/utils/health-check/",
    })
  }
}