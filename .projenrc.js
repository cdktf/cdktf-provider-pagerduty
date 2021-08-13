const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "PagerDuty/pagerduty@~> 1.10"
});

project.synth();
