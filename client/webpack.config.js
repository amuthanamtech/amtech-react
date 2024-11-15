module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/, // Match .png, .jpg, .jpeg, .gif, and .svg files
          type: 'asset/resource', // Emit a separate file and export the URL
        },
      ],
    },
  };
  