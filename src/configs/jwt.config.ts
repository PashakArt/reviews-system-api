import { ConfigService } from '@nestjs/config';

export const getJwtConfig = async (configService: ConfigService) => ({
  secret: configService.get('JWT_CONFIG'),
});
