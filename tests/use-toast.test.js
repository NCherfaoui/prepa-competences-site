// tests/use-toast.test.js
import { renderHook, act } from "@testing-library/react-hooks";
import { useToast } from "../src/components/ui/use-toast";

test("should add and remove toast", () => {
  const { result } = renderHook(() => useToast());

  act(() => {
    result.current.toast({ message: "Test Toast" });
  });

  expect(result.current.toasts).toHaveLength(1);

  act(() => {
    result.current.dismiss(result.current.toasts[0].id);
  });

  expect(result.current.toasts).toHaveLength(0);
});
