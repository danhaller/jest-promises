var service = jest.mock('../src/service');
var report = jest.mock('../src/report');

app = require('../src/app');

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