jest.mock('../src/service');
jest.mock('../src/report');

const service = require('../src/service');
const report = require('../src/report');
const app = require('../src/app');

describe('app', () => {

  it('should call the service with the params', () => {
    expect(service).toHaveBeenCalledWith(params);
  });

  describe('success', () => {
    it('should report success', () => {
      expect(report).toHaveBeenCalledWith('happy face :)');
    });
  });

  describe('failure', () => {
    it('should report failure', () => {
      expect(report).toHaveBeenCalledWith('sad face :(');
    });
  });
});