export interface IProfile {
  data: {
    userInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      mobile: string;
      location: string;
      avatarPath: string;
      userId: string;
    };
    stats: {
      title: string;
      total: string;
    };
    followings: any;
  };
}
