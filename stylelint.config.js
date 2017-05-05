module.exports = {
	"rules": {
		"block-no-empty": null,
		"color-no-invalid-hex": true,
		"comment-empty-line-before": ["always", {
			"ignore": ["stylelint-command", "after-comment"]
		}],
		"declaration-colon-space-after": "always",
		"indentation": [4, {
			"except": ["value"]
		}],
		"max-empty-lines": 2,
		"unit-whitelist": ["em", "rem", "%", "s"]
	}
}
