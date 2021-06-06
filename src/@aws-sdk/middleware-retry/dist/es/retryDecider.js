import { isClockSkewError, isRetryableByTrait, isThrottlingError, isTransientError, } from "@aws-sdk/service-error-classification";
export var defaultRetryDecider = function (error) {
    if (!error) {
        return false;
    }
    return isRetryableByTrait(error) || isClockSkewError(error) || isThrottlingError(error) || isTransientError(error);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cnlEZWNpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JldHJ5RGVjaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsZ0JBQWdCLEdBQ2pCLE1BQU0sdUNBQXVDLENBQUM7QUFHL0MsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxLQUFlO0lBQ2pELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNySCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBpc0Nsb2NrU2tld0Vycm9yLFxuICBpc1JldHJ5YWJsZUJ5VHJhaXQsXG4gIGlzVGhyb3R0bGluZ0Vycm9yLFxuICBpc1RyYW5zaWVudEVycm9yLFxufSBmcm9tIFwiQGF3cy1zZGsvc2VydmljZS1lcnJvci1jbGFzc2lmaWNhdGlvblwiO1xuaW1wb3J0IHsgU2RrRXJyb3IgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJldHJ5RGVjaWRlciA9IChlcnJvcjogU2RrRXJyb3IpID0+IHtcbiAgaWYgKCFlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc1JldHJ5YWJsZUJ5VHJhaXQoZXJyb3IpIHx8IGlzQ2xvY2tTa2V3RXJyb3IoZXJyb3IpIHx8IGlzVGhyb3R0bGluZ0Vycm9yKGVycm9yKSB8fCBpc1RyYW5zaWVudEVycm9yKGVycm9yKTtcbn07XG4iXX0=