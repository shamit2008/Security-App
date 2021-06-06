"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRetryPlugin = exports.retryMiddlewareOptions = exports.retryMiddleware = void 0;
const retryMiddleware = (options) => (next, context) => async (args) => {
    var _a;
    if ((_a = options === null || options === void 0 ? void 0 : options.retryStrategy) === null || _a === void 0 ? void 0 : _a.mode)
        context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", options.retryStrategy.mode]];
    return options.retryStrategy.retry(next, args);
};
exports.retryMiddleware = retryMiddleware;
exports.retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(exports.retryMiddleware(options), exports.retryMiddlewareOptions);
    },
});
exports.getRetryPlugin = getRetryPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cnlNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JldHJ5TWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFhTyxNQUFNLGVBQWUsR0FBRyxDQUFDLE9BQTRCLEVBQUUsRUFBRSxDQUFDLENBQy9ELElBQWtDLEVBQ2xDLE9BQWdDLEVBQ0YsRUFBRSxDQUFDLEtBQUssRUFDdEMsSUFBbUMsRUFDSyxFQUFFOztJQUMxQyxJQUFJLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsMENBQUUsSUFBSTtRQUM5QixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckcsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFDO0FBVFcsUUFBQSxlQUFlLG1CQVMxQjtBQUVXLFFBQUEsc0JBQXNCLEdBQXFEO0lBQ3RGLElBQUksRUFBRSxpQkFBaUI7SUFDdkIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ2YsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixRQUFRLEVBQUUsTUFBTTtJQUNoQixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFSyxNQUFNLGNBQWMsR0FBRyxDQUFDLE9BQTRCLEVBQXVCLEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLFlBQVksRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQzVCLFdBQVcsQ0FBQyxHQUFHLENBQUMsdUJBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSw4QkFBc0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FDRixDQUFDLENBQUM7QUFKVSxRQUFBLGNBQWMsa0JBSXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWJzb2x1dGVMb2NhdGlvbixcbiAgRmluYWxpemVIYW5kbGVyLFxuICBGaW5hbGl6ZUhhbmRsZXJBcmd1bWVudHMsXG4gIEZpbmFsaXplSGFuZGxlck91dHB1dCxcbiAgRmluYWxpemVSZXF1ZXN0SGFuZGxlck9wdGlvbnMsXG4gIEhhbmRsZXJFeGVjdXRpb25Db250ZXh0LFxuICBNZXRhZGF0YUJlYXJlcixcbiAgUGx1Z2dhYmxlLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuaW1wb3J0IHsgUmV0cnlSZXNvbHZlZENvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCByZXRyeU1pZGRsZXdhcmUgPSAob3B0aW9uczogUmV0cnlSZXNvbHZlZENvbmZpZykgPT4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyID0gTWV0YWRhdGFCZWFyZXI+KFxuICBuZXh0OiBGaW5hbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+LFxuICBjb250ZXh0OiBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dFxuKTogRmluYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PiA9PiBhc3luYyAoXG4gIGFyZ3M6IEZpbmFsaXplSGFuZGxlckFyZ3VtZW50czxhbnk+XG4pOiBQcm9taXNlPEZpbmFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gIGlmIChvcHRpb25zPy5yZXRyeVN0cmF0ZWd5Py5tb2RlKVxuICAgIGNvbnRleHQudXNlckFnZW50ID0gWy4uLihjb250ZXh0LnVzZXJBZ2VudCB8fCBbXSksIFtcImNmZy9yZXRyeS1tb2RlXCIsIG9wdGlvbnMucmV0cnlTdHJhdGVneS5tb2RlXV07XG4gIHJldHVybiBvcHRpb25zLnJldHJ5U3RyYXRlZ3kucmV0cnkobmV4dCwgYXJncyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmV0cnlNaWRkbGV3YXJlT3B0aW9uczogRmluYWxpemVSZXF1ZXN0SGFuZGxlck9wdGlvbnMgJiBBYnNvbHV0ZUxvY2F0aW9uID0ge1xuICBuYW1lOiBcInJldHJ5TWlkZGxld2FyZVwiLFxuICB0YWdzOiBbXCJSRVRSWVwiXSxcbiAgc3RlcDogXCJmaW5hbGl6ZVJlcXVlc3RcIixcbiAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSZXRyeVBsdWdpbiA9IChvcHRpb25zOiBSZXRyeVJlc29sdmVkQ29uZmlnKTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZChyZXRyeU1pZGRsZXdhcmUob3B0aW9ucyksIHJldHJ5TWlkZGxld2FyZU9wdGlvbnMpO1xuICB9LFxufSk7XG4iXX0=