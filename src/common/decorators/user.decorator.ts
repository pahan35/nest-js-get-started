import { createRouteParamDecorator } from '@nestjs/common';

export const User = createRouteParamDecorator((data, req) => {
    console.log(data); // test
    return req.user;
});
