export function useUserInfo(): UserInfo | null {
  return createUserInfo({
    id: "usr_123",
    isAuthenticated: true,
    locale: "en",
    email: "foo@bar.test",
    firstName: "Foo",
    lastName: "Bar",
    title: "Software Engineer",
    role: "Owner",
    tenantId: "456"
  });
}

export type UserInfo = {
  initials: string;
  fullName: string;
} & UserInfoEnv;

export interface UserInfoEnv {
  /**
   * Identifier
   */
  id: `usr_${string}`;
  /**
   * Is user authenticated
   **/
  isAuthenticated: boolean;
  /**
   * User locale
   **/
  locale: string;
  /**
   * User email
   **/
  email?: string;
  /**
   * First name
   **/
  firstName?: string;
  /**
   * Last name
   **/
  lastName?: string;
  /**
   * Job title
   */
  title?: string;
  /**
   * User role
   **/
  role?: "Owner" | "Admin" | "Member";
  /**
   * Tenant id
   **/
  tenantId?: string;
  /**
   * Avatar url
   **/
  avatarUrl?: string;
}

function createUserInfo(userInfoEnv: UserInfoEnv): UserInfo {
  const { firstName, lastName, email } = userInfoEnv;
  const initials = firstName && lastName ? `${firstName[0]}${lastName[0]}` : email?.slice(0, 2).toUpperCase() ?? "";

  const fullName = firstName && lastName ? `${userInfoEnv.firstName} ${userInfoEnv.lastName}` : email ?? "";

  return { ...userInfoEnv, initials, fullName };
}
