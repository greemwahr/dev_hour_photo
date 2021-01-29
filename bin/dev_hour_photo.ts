#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DevHourPhotoStack } from '../lib/dev_hour_photo-stack';

const app = new cdk.App();
new DevHourPhotoStack(app, 'DevHourPhotoStack');
