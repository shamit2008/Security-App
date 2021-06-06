"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSocketTimeout = void 0;
const setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    request.setTimeout(timeoutInMs, () => {
        // destroy the request
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
    });
};
exports.setSocketTimeout = setSocketTimeout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvY2tldC10aW1lb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NldC1zb2NrZXQtdGltZW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLGdCQUFnQixHQUFHLENBQUMsT0FBc0IsRUFBRSxNQUE0QixFQUFFLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRTtJQUN4RyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7UUFDbkMsc0JBQXNCO1FBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsV0FBVyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFOVyxRQUFBLGdCQUFnQixvQkFNM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnRSZXF1ZXN0IH0gZnJvbSBcImh0dHBcIjtcblxuZXhwb3J0IGNvbnN0IHNldFNvY2tldFRpbWVvdXQgPSAocmVxdWVzdDogQ2xpZW50UmVxdWVzdCwgcmVqZWN0OiAoZXJyOiBFcnJvcikgPT4gdm9pZCwgdGltZW91dEluTXMgPSAwKSA9PiB7XG4gIHJlcXVlc3Quc2V0VGltZW91dCh0aW1lb3V0SW5NcywgKCkgPT4ge1xuICAgIC8vIGRlc3Ryb3kgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LmRlc3Ryb3koKTtcbiAgICByZWplY3QoT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoYENvbm5lY3Rpb24gdGltZWQgb3V0IGFmdGVyICR7dGltZW91dEluTXN9IG1zYCksIHsgbmFtZTogXCJUaW1lb3V0RXJyb3JcIiB9KSk7XG4gIH0pO1xufTtcbiJdfQ==