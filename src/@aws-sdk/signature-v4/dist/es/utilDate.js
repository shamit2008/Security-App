export function iso8601(time) {
    return toDate(time)
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z");
}
export function toDate(time) {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbERhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbERhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLE9BQU8sQ0FBQyxJQUE0QjtJQUNsRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDaEIsV0FBVyxFQUFFO1NBQ2IsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxJQUE0QjtJQUNqRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztLQUM5QjtJQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2QjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc284NjAxKHRpbWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gdG9EYXRlKHRpbWUpXG4gICAgLnRvSVNPU3RyaW5nKClcbiAgICAucmVwbGFjZSgvXFwuXFxkezN9WiQvLCBcIlpcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUodGltZTogbnVtYmVyIHwgc3RyaW5nIHwgRGF0ZSk6IERhdGUge1xuICBpZiAodHlwZW9mIHRpbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0aW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKE51bWJlcih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE51bWJlcih0aW1lKSAqIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUodGltZSk7XG4gIH1cblxuICByZXR1cm4gdGltZTtcbn1cbiJdfQ==